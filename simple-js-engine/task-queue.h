#ifndef TASK_QUEUE_H
#define TASK_QUEUE_H
#include <queue>

using namespace std;

class TaskQueue {
    private:
        queue<function<void()>> q;

    public:
        TaskQueue() = default;
        void queueRun();
        void push(function<void()> func);
        void pop();
        bool empty();
        function<void()> front();
        function<void()> back();
};

#endif
