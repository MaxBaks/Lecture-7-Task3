import Character from '../js/domain';

test('characters stats should be increased in powerMode', () => {
  const char = new Character('Лучник', 10, 2, 25, 25);
  char.powerMode = true;

  const {
    name, health, level, attack, defence,
  } = char;
  const result = {
    name, health, level, attack, defence,
  };

  const expected = {
    name: 'Лучник', health: 20, level: 2, attack: 50, defence: 50,
  };

  expect(result).toEqual(expected);
});


test('powerMode should be enabled when less than 3 shots made', () => {
  const char = new Character('Лучник', 10, 2, 25, 25);
  char.powerMode = true;
  char.makeAttackMove();
  char.makeAttackMove();

  const {
    name, health, level, attack, defence,
  } = char;
  const result = {
    name, health, level, attack, defence,
  };

  const expected = {
    name: 'Лучник', health: 20, level: 2, attack: 50, defence: 50,
  };

  expect(result).toEqual(expected);
});

test('powerMode should be disabled when 3 shots made', () => {
  const char = new Character('Лучник', 10, 2, 25, 25);
  char.powerMode = true;
  char.makeAttackMove();
  char.makeAttackMove();
  char.makeAttackMove();

  const {
    name, health, level, attack, defence,
  } = char;
  const result = {
    name, health, level, attack, defence,
  };

  const expected = {
    name: 'Лучник', health: 10, level: 2, attack: 25, defence: 25,
  };

  expect(result).toEqual(expected);
});
