"""
Please implement the following classe:
- Create a Vehicle class that contains the properties engine and speed.
   - Add a method info(), which logs the engine & speed values.
- Create a Car class that inherits from the Vehicle class.
   - Add more properties wheels and brakes.
   - Add a method honk(), which logs “Honk!”.
   - Add a static method has_brakes(car), which takes an argument car object and returns true if its brake property is true, otherwise false.

Note: Static methods are invoked by calling it on the class itself, so Car.has_brakes().
"""


class Vehicle:
    def __init__(self, engine: str, speed: int) -> None:
        self.engine = engine
        self.speed = speed

    def info(self):
        print(
            f"My vehicle has a {self.engine} engine that can go up to {self.speed} miles/hr."
        )

    @staticmethod
    def speed_check(vehicle):
        print("Can this car go over 100 miles/hr?")
        return True if vehicle.speed >= 100 else False

    def __repr__(self) -> str:
        return f"Vehicle(Engine: { self.engine!r}, Speed: {self.speed})"


class Car(Vehicle):
    def __init__(self, engine: str, speed: int, wheels: str, brakes: str) -> None:
        super().__init__(engine, speed)
        self.wheels = wheels
        self.brakes = brakes

    def honk(self):
        print("Honk!")

    @staticmethod
    def has_brakes(car):
        return True if car.brakes else False

    def __repr__(self) -> str:
        return super().__repr__() + f", Wheels: {self.wheels}, Brakes: {self.brakes!r}"


# test vehicle constructor and .info() method
my_vehicle_1 = Vehicle("V10", 120)
my_vehicle_2 = Vehicle("V4", 80)
print(my_vehicle_1)
print(my_vehicle_2)
my_vehicle_1.info()
my_vehicle_2.info()

# test car constructor and instance method honk()
my_car_1 = Car("V6", 100, "Michelin", "hydraulic")
my_car_2 = Car("V6", 90, "Michelle", None)
print(my_car_1)
print(my_car_2)
print(isinstance(my_car_1, Car))
print(isinstance(my_car_2, Car))
my_car_1.honk()
my_car_2.honk()

# test Car class static method has_brakes()
print(Car.has_brakes(my_car_1))
print(Car.has_brakes(my_car_2))

# test Vehicle class and Car class static method speed_check
print(Vehicle.speed_check(my_vehicle_1))
print(Vehicle.speed_check(my_vehicle_2))
print(Vehicle.speed_check(my_car_1))
print(Vehicle.speed_check(my_car_2))
print(Car.speed_check(my_car_1))
print(Car.speed_check(my_car_2))
