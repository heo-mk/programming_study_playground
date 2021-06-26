class Coords(object):
	def __init__(self, x, y):
		self.x, self.y = x, y

point = Coords(1,2)
print( '({}, {})'.format(point.x, point.y))

def print_coord(coord):
	print( '({} {})'.format(coord.x, coord.y) )
print_coord(point)