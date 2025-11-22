"use client";

import { useState, useEffect, useCallback } from 'react';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const MAX_SCORE = 1000;
const TASK_POINTS = 100;
const BONUS_POINTS = 250;
const BONUS_THRESHOLD = 5;

const getTodayString = () => new Date().toISOString().split('T')[0];

export const useQuestState = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [score, setScore] = useState(0);
  const [bonusApplied, setBonusApplied] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const recalculateScore = useCallback((currentTasks: Task[]) => {
    const completedTasks = currentTasks.filter(t => t.completed);
    let newScore = completedTasks.length * TASK_POINTS;
    let newBonusApplied = false;
    if (completedTasks.length >= BONUS_THRESHOLD) {
      newScore += BONUS_POINTS;
      newBonusApplied = true;
    }
    setScore(Math.min(newScore, MAX_SCORE));
    setBonusApplied(newBonusApplied);
  }, []);

  useEffect(() => {
    try {
        const today = getTodayString();
        const storedDate = localStorage.getItem('capybaraQuest_lastResetDate');
    
        if (storedDate !== today) {
          localStorage.setItem('capybaraQuest_tasks', '[]');
          localStorage.setItem('capybaraQuest_score', '0');
          localStorage.setItem('capybaraQuest_bonusApplied', 'false');
          localStorage.setItem('capybaraQuest_lastResetDate', today);
          
          setTasks([]);
          setScore(0);
          setBonusApplied(false);
        } else {
          const storedTasks = JSON.parse(localStorage.getItem('capybaraQuest_tasks') || '[]');
          setTasks(storedTasks);
          // Recalculate score from tasks on initial load to ensure consistency
          recalculateScore(storedTasks);
        }
    } catch (error) {
        console.error("Failed to access localStorage for Capybara Quest:", error);
        setTasks([]);
        setScore(0);
        setBonusApplied(false);
    }
    setIsLoaded(true);
  }, [recalculateScore]);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('capybaraQuest_tasks', JSON.stringify(tasks));
        localStorage.setItem('capybaraQuest_score', score.toString());
        localStorage.setItem('capybaraQuest_bonusApplied', bonusApplied.toString());
      } catch (error) {
        console.error("Failed to save to localStorage for Capybara Quest:", error);
      }
    }
  }, [tasks, score, bonusApplied, isLoaded]);

  const addTask = useCallback((text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  }, []);

  const updateTask = useCallback((id: number, text: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, text } : task
      )
    );
  }, []);

  const deleteTask = useCallback((id: number) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
    recalculateScore(newTasks);
  }, [tasks, recalculateScore]);

  const completeTask = useCallback((id: number) => {
    const newTasks = tasks.map(task => {
        if (task.id === id && !task.completed) {
            return { ...task, completed: true };
        }
        return task;
    });

    if (JSON.stringify(tasks) !== JSON.stringify(newTasks)) {
      setTasks(newTasks);
      recalculateScore(newTasks);
    }
  }, [tasks, recalculateScore]);

  const completedTasksCount = tasks.filter(t => t.completed).length;
  const totalTasksCount = tasks.length;
  
  let capybaraState: 'sad' | 'neutral' | 'happy' = 'sad';
  if (totalTasksCount > 0) {
    capybaraState = completedTasksCount > 0 ? 'happy' : 'neutral';
  }
  if (totalTasksCount > 0 && completedTasksCount === totalTasksCount) {
    capybaraState = 'happy';
  }
  if (totalTasksCount === 0) {
    capybaraState = 'sad';
  }


  return {
    tasks,
    score,
    maxScore: MAX_SCORE,
    addTask,
    completeTask,
    deleteTask,
    updateTask,
    capybaraState,
    isLoaded,
    completedTasksCount,
    totalTasksCount
  };
};
