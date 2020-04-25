class Stack

    def initialize
        @stack = []
    end

    def push(el)
        @stack << el
    end

    def pop
        @stack = @stack[0...-1]
    end

    def peek
        return @stack[0]
    end
end

class Queue

    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue << el
    end

    def dequeue
        @queue = @queue[1..-1]
    end

    def peek
        return @queue[0]
    end
end

class Map

    def initialize
        @map = []
    end

    def set(key, value)
        self.each do |pair|
            if pair[0] != key
                @map += [key, value]
            else
                pair[1] = value
            end
        end
    end

    def get(key)
        self.each do |pair|
            puts pair[0]
        end
    end

    def delete(key)
        (0...self.length) do |i|
            self.delete(i) if self[i][0] == key
        end
    end
end
