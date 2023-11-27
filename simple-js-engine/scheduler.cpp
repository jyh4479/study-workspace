#include "scheduler.h"
#include "task-queue.h"
#include <iostream>
#include <string>
#include <thread>
#include <unistd.h>
using namespace std;

Scheduler::Scheduler() {}

void Scheduler::jsCode(string content) {
    cout << content << endl;
}

void Scheduler::runAsyncTask(function<void(string)> func, string content,int executionTime) {
    thread asyncThread([func, content, executionTime, this]() {
        sleep(executionTime);

        function<void()> task = [func, content]() {
            func(content);
        };

        q.push(task);
    });

    asyncThread.detach();
}

void Scheduler::runTask(function<void(string)> func, string content) {
    func(content);
}

void Scheduler::run() {
    cout << "---- run scheduler ----" << endl;

    this->runTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST");
    this->runAsyncTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST2", 5);
    this->runAsyncTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST3", 1);
    this->runAsyncTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST4", 2);
    this->runTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST5");

    sleep(1);
    this->runTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST6");
    this->runAsyncTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST7", 10);
    sleep(1);
    this->runTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST8");
    this->runAsyncTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST9", 2);
    sleep(1);

    cout << "----- end stack ------" << endl;
    
    while(1){
        while(!this->q.empty()){
            cout << "----- run task queue ------" << endl;
            function<void()> func = this->q.front();
            this->q.pop();
            func();
        }
    }
}