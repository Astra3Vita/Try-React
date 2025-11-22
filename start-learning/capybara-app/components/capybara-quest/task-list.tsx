"use client";

import { useState } from 'react';
import type { Task } from '@/hooks/use-quest-state';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Edit, Trash2, Save, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';

interface TaskListProps {
  tasks: Task[];
  onCompleteTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onUpdateTask: (id: number, text: string) => void;
}

const TaskList = ({ tasks, onCompleteTask, onDeleteTask, onUpdateTask }: TaskListProps) => {
    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
    const [editingTaskText, setEditingTaskText] = useState('');

    const handleEdit = (task: Task) => {
        setEditingTaskId(task.id);
        setEditingTaskText(task.text);
    }

    const handleCancelEdit = () => {
        setEditingTaskId(null);
        setEditingTaskText('');
    }

    const handleSave = () => {
        if (editingTaskId && editingTaskText.trim()) {
            onUpdateTask(editingTaskId, editingTaskText.trim());
            handleCancelEdit();
        }
    }


  if (tasks.length === 0) {
    return (
        <div className="text-center py-10 px-4 border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">No tasks yet. Add one to begin your quest!</p>
        </div>
    );
  }

  return (
    <Card className="w-full bg-card/80">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">Today's Tasks</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-3 bg-background rounded-lg shadow-sm transition-all duration-300"
            >
              {editingTaskId === task.id ? (
                <>
                    <Input 
                        value={editingTaskText}
                        onChange={(e) => setEditingTaskText(e.target.value)}
                        className="flex-grow mr-2"
                        aria-label="Edit task input"
                    />
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={handleSave} aria-label="Save task">
                            <Save className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={handleCancelEdit} aria-label="Cancel edit">
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </>
              ) : (
                <>
                    <span
                        className={cn(
                        'flex-grow mr-4 transition-all',
                        task.completed && 'line-through text-muted-foreground italic'
                        )}
                    >
                        {task.text}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                        <Button
                            variant={task.completed ? "secondary" : "default"}
                            size="sm"
                            onClick={() => onCompleteTask(task.id)}
                            disabled={task.completed}
                            aria-label={task.completed ? 'Task completed' : `Complete task: ${task.text}`}
                        >
                            <Check className="h-4 w-4" />
                            <span className="hidden sm:inline ml-2">{task.completed ? 'Done!' : 'Done'}</span>
                        </Button>
                        {!task.completed && (
                            <Button variant="outline" size="icon" onClick={() => handleEdit(task)} aria-label={`Edit task: ${task.text}`}>
                                <Edit className="h-4 w-4" />
                            </Button>
                        )}
                         <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="destructive" size="icon" aria-label={`Delete task: ${task.text}`}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your task.
                                </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => onDeleteTask(task.id)}>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                    </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TaskList;
