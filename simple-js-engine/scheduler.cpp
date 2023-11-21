#include "scheduler.h"
#include "task-queue.h"
#include <iostream>
#include <string>
#include <thread>
#include <functional>
#include <unistd.h>
using namespace std;

Scheduler::Scheduler() {
    this->q = TaskQueue();
}

void Scheduler::jsCode(string content) {
    cout << content << endl;
}

void Scheduler::runAsyncTask(function<void(string)> func, string content,int executionTime) {
    thread asyncThread([func, content, executionTime]() {
        sleep(executionTime);
        func(content);
    });

    asyncThread.detach();
}

void Scheduler::runTask(function<void(string)> func, string content) {
    func(content);
}

void Scheduler::run() {
    cout << "scheduler run" << endl;

    this->runTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST");
     this->runAsyncTask(bind(&Scheduler::jsCode, this, placeholders::_1), "HIHI", 5);
    this->runAsyncTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST2", 1);
    this->runAsyncTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST3", 2);
    this->runTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST4");

    cout << "부모는 끝" << endl;

    while(1);

    this->q.queueRun();
}