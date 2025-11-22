"use client";

import { useQuestState } from "@/hooks/use-quest-state";
import CapybaraAvatar from "@/components/capybara-quest/capybara-avatar";
import CountdownTimer from "@/components/capybara-quest/countdown-timer";
import ScoreProgress from "@/components/capybara-quest/score-progress";
import TaskForm from "@/components/capybara-quest/task-form";
import TaskList from "@/components/capybara-quest/task-list";
import { Skeleton } from "@/components/ui/skeleton";
import { PawPrint } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function Home() {
  const {
    tasks,
    score,
    maxScore,
    addTask,
    completeTask,
    deleteTask,
    updateTask,
    capybaraState,
    isLoaded,
    completedTasksCount,
    totalTasksCount
  } = useQuestState();

  const getGreeting = () => {
    if (capybaraState === 'sad') return "Let's add some tasks to start!";
    if (capybaraState === 'neutral') return "A new quest awaits! Let's get started.";
    if (capybaraState === 'happy' && completedTasksCount < totalTasksCount) return "Great progress! Keep it up!";
    if (capybaraState === 'happy' && completedTasksCount === totalTasksCount && totalTasksCount > 0) return "Amazing! All tasks completed!";
    return "Welcome to Capybara Quest!";
  };

  if (!isLoaded) {
    return (
      <main className="flex min-h-screen flex-col items-center p-4 md:p-8 lg:p-12 bg-background font-body">
        <div className="w-full max-w-2xl mx-auto space-y-8">
            <div className="flex justify-center">
              <Skeleton className="h-10 w-64" />
            </div>
            <Skeleton className="h-20 w-full" />
            <div className="flex justify-center">
                <Skeleton className="h-48 w-48 rounded-lg" />
            </div>
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-32 w-full" />
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 lg:p-12 bg-background font-body text-foreground">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary flex items-center justify-center gap-3">
            <PawPrint className="h-8 w-8 text-secondary" />
            Capybara To-Do List
          </h1>
          <p className="text-muted-foreground">{getGreeting()}</p>
        </header>

        <div className="space-y-4">
            <ScoreProgress score={score} maxScore={maxScore} />
            <div className="flex justify-end">
                <CountdownTimer />
            </div>
        </div>

        <div className="flex justify-center">
          <CapybaraAvatar state={capybaraState} />
        </div>

        <section className="space-y-6">
          <TaskForm onAddTask={addTask} />
          <TaskList 
            tasks={tasks} 
            onCompleteTask={completeTask}
            onDeleteTask={deleteTask}
            onUpdateTask={updateTask}
            />
        </section>
        
      </div>
    </main>
  );
}
