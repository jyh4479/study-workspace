#ifndef SCHEDULER_H
#define SCHEDULER_H

#include "task-queue.h"
#include <string>

using namespace std;

class Scheduler {
    private:
        TaskQueue q;
        void jsCode(string content);
        void runAsyncTask(function<void(string)> func, string content, int executionTime);
        void runTask(function<void(string)> func, string content);

    public:
        Scheduler();
        void run();
};

#endif


