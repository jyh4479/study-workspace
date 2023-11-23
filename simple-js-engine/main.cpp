#include <unistd.h>
#include <sys/wait.h>
#include <iostream>
#include <thread>
#include "scheduler.h"
using namespace std;

int main() {
    Scheduler myScheduler;
    myScheduler.run();
    return 0;
}