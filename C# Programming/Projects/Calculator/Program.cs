namespace Calculator
{
    internal class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Simple Calculator App");
            while (true)
            {
                Console.WriteLine("\nEnter operation: add / sub / mul / div / mod / exit");
                Console.Write("> ");
                string operation = Console.ReadLine().Trim().ToLower();

                if (operation == "exit")
                {
                    Console.WriteLine("Goodbye!");
                    break;  // Exit the loop
                }

                switch (operation)
                {
                    case "add":
                        Add add = new Add();
                        add.Run();
                        break;

                    case "sub":
                        Subtract subtract = new Subtract();
                        subtract.Run();
                        break;

                    case "mul":
                        Multiply multiply = new Multiply();
                        multiply.Run();
                        break;

                    case "div":
                        Divide divide = new Divide();
                        divide.Run();
                        break;

                    case "mod":
                        Modulus modulus = new Modulus();
                        modulus.Run();
                        break;

                    default:
                        Console.WriteLine("Unknown operation! Please type: add, sub, mul, div, mod, or exit");
                        break;
                }
            }
        }
    }
}
