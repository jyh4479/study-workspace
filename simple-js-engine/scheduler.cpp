#include "scheduler.h"
#include "task-queue.h"
#include <iostream>
#include <string>
#include <thread>
#include <functional>
#include <unistd.h>
using namespace std;

Scheduler::Scheduler() {
    // this->q = TaskQueue();
}

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
    cout << "scheduler run" << endl;

    this->runTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST");
    this->runAsyncTask(bind(&Scheduler::jsCode, this, placeholders::_1), "HIHI", 5);
    this->runAsyncTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST2", 1);
    this->runAsyncTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST3", 2);
    this->runTask(bind(&Scheduler::jsCode, this, placeholders::_1), "TEST4");

    //TODO: runAsyncTask 함수에서 각 작업을 queue에 넣고 메인 스레드가 실행할 코드가 없을때 실행주면 된다.

    sleep(7);

    this->q.queueRun();
    
    while(!this->q.empty()){
        cout << "안빔" << endl;
        function<void()> func = this->q.front();
        this->q.pop();
        func();
    }

    // while(!this->q.empty()){
    //     cout << "안빔" << endl;
    // }

    cout << "----- 부모는 끝 ------" << endl;

    while(1);

    this->q.queueRun();
}