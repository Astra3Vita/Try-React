"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';

interface TaskFormProps {
  onAddTask: (text: string) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAddTask(taskText.trim());
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <Input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task for your capybara..."
        aria-label="New task input"
        className="text-base"
      />
      <Button type="submit" aria-label="Add task" size="lg">
        <Plus className="h-5 w-5" />
        <span className="hidden sm:inline ml-2">Add Task</span>
      </Button>
    </form>
  );
};

export default TaskForm;
