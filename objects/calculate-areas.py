"""
Input:
const shapes = [
  {type: 'SQUARE', edge:[4]},
  {type: 'TRIANGLE', edge:[3,4]},
  {type: 'CIRCLE', edge: [1] },
];

Output:
calculateArea(shapes)
  .then(res => console.log(res))
  .catch(err=>console.log(err))
// after 2s, the result would be [16,6,3.14]
"""

import asyncio


async def calculate_areas(shapes_obj):
    result = []

    for shape in shapes_obj:
        if shape["shape_type"] == "SQUARE":
            result.append(shape["edge"][0] ** 2)
        elif shape["shape_type"] == "TRIANGLE":
            result.append(shape["edge"][0] * shape["edge"][1] / 2)
        elif shape["shape_type"] == "CIRCLE":
            result.append(shape["edge"][0] * 3.14)
        else:
            raise ValueError(f"Invalid shape type: {shape['shape_type']}")

    # simulate a 2-second delay (similar to setTimeout)
    await asyncio.sleep(2)
    return result


async def main():
    shapes = [
        {"shape_type": "SQUARE", "edge": [4]},
        {"shape_type": "TRIANGLE", "edge": [3, 4]},
        {"shape_type": "CIRCLE", "edge": [1]},
        # {type: "HEXAGON", "edge": [2]},
    ]

    try:
        result = await calculate_areas(shapes)
        print(result)  # output: [16, 6.0, 3.14]
    except Exception as e:
        print(f"Error: {e}")


asyncio.run(main())
