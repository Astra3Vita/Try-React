// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

"use client";

import { useQuestState } from "@/hooks/use-quest-state";
import CapybaraAvatar from "@/components/capybara-quest/capybara-avatar";
import CountdownTimer from "@/components/capybara-quest/countdown-timer";
import ScoreProgress from "@/components/capybara-quest/score-progress";
import TaskForm from "@/components/capybara-quest/task-form";
import TaskList from "@/components/capybara-quest/task-list";
import { Skeleton } from "@/components/ui/skeleton";
import { PawPrint } from "lucide-react";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";

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

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {placeholderImages.map((img) => (
                <Image
                key={img.id}
                src={img.imageUrl}
                alt={img.description}
                width={200}
                height={200}
                className="rounded-lg shadow-md object-cover aspect-square"
                data-ai-hint={img.imageHint}
                />
            ))}
        </div> */}

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
