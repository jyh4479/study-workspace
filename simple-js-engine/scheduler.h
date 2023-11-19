#ifndef SCHEDULER_H
#define SCHEDULER_H

#include "task-queue.h"

class Scheduler {
    private:
        TaskQueue q;

    public:
        Scheduler();
        void run();
};

#endif