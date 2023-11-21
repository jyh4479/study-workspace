#ifndef TASK_QUEUE_H
#define TASK_QUEUE_H

#include <queue>

using namespace std;

class TaskQueue {
    public:
        void queueRun();
        queue<function<void()>> q;
};

#endif
