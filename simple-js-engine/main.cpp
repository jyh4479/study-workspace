#include <unistd.h>
#include <sys/wait.h>
#include <iostream>
#include "scheduler.h"
using namespace std;

int main() {
    // pid_t pid = fork();

    // if (pid == -1) {
    //     // fork 실패
    //     perror("fork");
    //     return 1;
    // }

    // if (pid == 0) {
    //     cout << "hi2" << endl;
    //     return 1;
    // } else {
    //     cout << "hi" << endl;
    //     waitpid(pid, NULL, 0);
    // }

    Scheduler myScheduler;

    myScheduler.run();

    return 0;
}


// g++ -c Scheduler.cpp -o Scheduler.o
// g++ -c main.cpp -o main.o
// g++ Scheduler.o main.o -o my_program