const filters = {
  cpp: [ -2, -3, 1050571 ],
  dotNet: [141901],
  rpg: [1008000, 1009000, 1011000, 1012000]
};

filters.all = [].concat(...filters.cpp, ...filters.dotNet, ...filters.rpg);

export default filters;