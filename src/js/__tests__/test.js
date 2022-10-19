import Team from '../team';

const magician = {
  health: 100,
  type: 'Magician',
  level: 1,
  attack: 10,
  defence: 40,
};

const bowman = {
  health: 100,
  type: 'Bowman',
  level: 1,
  attack: 25,
  defence: 25,
};

const daemon = {
  health: 100,
  type: 'Daemon',
  level: 1,
  attack: 10,
  defence: 40,
};

const undead = {
  health: 100,
  type: 'Undead',
  level: 1,
  attack: 25,
  defence: 25,
};

const heroList = new Team();
heroList.add(magician);

test('check that a hero has been added', () => {
  const result = new Set([magician]);
  expect(heroList.members).toEqual(result);
});

test('checking the method Team.add() for an error', () => {
  expect(() => { heroList.add(magician); }).toThrow('The hero was added before');
});

test('checking the method Team.addAll() for adding a list of heroes', () => {
  const result = new Set([magician, daemon, bowman, undead]);
  heroList.addAll(daemon, bowman, undead);
  expect(heroList.members).toEqual(result);
});

test('checking the method Team.toArray() for conversion to an array', () => {
  heroList.addAll(daemon, bowman, undead);
  expect(heroList.toArray()).toEqual([magician, daemon, bowman, undead]);
});
