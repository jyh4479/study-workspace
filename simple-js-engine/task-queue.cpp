#include "scheduler.h"
#include "task-queue.h"
#include <iostream>
using namespace std;

void TaskQueue::push(function<void()> func){
    this->q.push(func);
}

void TaskQueue::pop(){
    this->q.pop();
}

function<void()> TaskQueue::front(){
    return this->q.front();
}

function<void()> TaskQueue::back(){
    return this->q.back();
}

bool TaskQueue::empty(){
    return this->q.empty();
}