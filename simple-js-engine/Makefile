CXX := g++
CXXFLAGS := -std=c++11 -Wall
SRCS := $(wildcard *.cpp)
OBJS := $(SRCS:.cpp=.o)
EXEC := my_program

$(EXEC): $(OBJS)
	$(CXX) $(CXXFLAGS) $^ -o $@

%.o: %.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

clean:
	rm -f $(OBJS) $(EXEC)