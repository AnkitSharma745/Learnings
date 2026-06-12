using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AreaCalculator
{
    internal class Rectangle
    {
        public void Run()
        {
            while (true)
            {
                Console.WriteLine("Please enter width: ");
                string input1 = Console.ReadLine();
                if (input1 == "exit")
                {
                    Console.WriteLine("Thank you!");
                    break;
                }
                if (input1 == "")
                {
                    Console.WriteLine("Thank you!");
                    break;
                }
                Console.WriteLine("Please enter height: ");

                string input2 = Console.ReadLine();

                if (input2 == "")
                {
                    Console.WriteLine("Thank you!");
                    break;
                }
                double width = double.Parse(input1);
                double height = double.Parse(input2);
                if(width==0 || height == 0)
                {
                    Console.WriteLine("It can't be zero");
                    break;

                }
                
                double result = width * height;
                Console.WriteLine($"Area of rectangle is: {result}");
            }
        }
    }
}
