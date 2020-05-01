class Octopus

    def self.sluggish_octopus(arr)
        max = arr.first
        arr.each do |el|
            max = el if el.length > max.length
            end
        max
    end

    def self.dominant_octopus(arr, &prc)
        return arr if arr.length <= 1

        mid_idx = arr.length / 2
        result = Octopus.merge(
        dominant_octopus(arr.take(mid_idx), &prc),
        dominant_octopus(arr.drop(mid_idx), &prc),
        &prc
        )
        result[-1]
    end

    def self.merge(left, right, &prc)
        merged_array = []
        prc = Proc.new { |num1, num2| num1 <=> num2 } unless block_given?
        until left.empty? || right.empty?
        case prc.call(left.first, right.first)
        when -1
            merged_array << left.shift
        when 0
            merged_array << left.shift
        when 1
            merged_array << right.shift
        end
        end

        merged_array + left + right

    end
end


arr = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
p Octopus.sluggish_octopus(arr)
p Octopus.dominant_octopus(arr)
