using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AreaCalculator
{
    internal class Square
    {
        public void Run()
        {
            while (true)
            {
                Console.WriteLine("Please enter side of square: ");
                string input = Console.ReadLine();
                if (input == "exit")
                {
                    break;
                }
                if (input == "")
                {
                    Console.WriteLine("Thank you!");
                    break;
                }
                double num1 = double.Parse(input);


                if (num1 == 0)
                {
                    Console.WriteLine("Number can't be zero");

                }
                double result = num1 * num1;
                Console.WriteLine("Area of square is: "+ result);
            }

        }
    }
}
