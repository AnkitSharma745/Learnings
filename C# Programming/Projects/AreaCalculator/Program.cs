namespace AreaCalculator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to the area calculator:");
            while (true)
            {
                Console.WriteLine("Please enter the area which you need to calculate (sq / cir / rect)");
                string operation = Console.ReadLine();
                switch (operation)
                {
                    case "sq":
                        Square square = new Square();
                        square.Run();
                        break;

                    case "rect":
                        Rectangle rectangle = new Rectangle();
                        rectangle.Run();
                        break;
                    case "cir":
                        Circle circle = new Circle();
                        circle.Run();
                        break;

                    case "exit":
                        break;


                }
            }
        }
    }
}
