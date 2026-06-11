namespace Calculator
{
    class Add
    {
        public void Run()
        {
            Console.Write("Enter first number: ");
            double num1 = double.Parse(Console.ReadLine());

            Console.Write("Enter second number: ");
            double num2 = double.Parse(Console.ReadLine());

            double result = num1 + num2;

            Console.WriteLine($"Result: {num1} + {num2} = {result}");
        }
    }
}
