"use client";

import { Progress } from "@/components/ui/progress";

interface ScoreProgressProps {
  score: number;
  maxScore: number;
}

const ScoreProgress = ({ score, maxScore }: ScoreProgressProps) => {
  const progressPercentage = (score / maxScore) * 100;

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between font-bold text-primary">
        <span className="font-headline text-lg">Daily Score</span>
        <span className="font-mono">{score} / {maxScore} pts</span>
      </div>
      <Progress value={progressPercentage} className="h-4 [&>div]:transition-all [&>div]:duration-500 [&>div]:ease-out" />
    </div>
  );
};

export default ScoreProgress;
