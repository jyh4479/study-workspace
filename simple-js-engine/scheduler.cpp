#include "scheduler.h"
#include "task-queue.h"
#include <iostream>
using namespace std;

// 생성자 구현
Scheduler::Scheduler() {
    this->q = TaskQueue();
}

// 멤버 함수 구현
void Scheduler::run() {
    cout << "scheduler run" << endl;
    this->q.queueRun();
}