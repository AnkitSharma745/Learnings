using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AreaCalculator
{
    internal class Circle
    {
        public void Run()
        {
            while (true)
            {
                Console.WriteLine("Please enter the radius of circle: ");
                string input = Console.ReadLine();
                if (input == "exit")
                {
                    Console.WriteLine("Thank you!");
                    break;
                }
                if (input == "")
                {
                    Console.WriteLine("Thank you!");
                    break;
                }
                double radius = double.Parse(input.Trim());
                if (radius == 0)
                {
                    Console.WriteLine("It can't be zero: ");
                }
                double result = radius * radius * Math.PI;
                Console.WriteLine($"Area of circle: {Math.Round(result)}");
            }
        }
    }
}
