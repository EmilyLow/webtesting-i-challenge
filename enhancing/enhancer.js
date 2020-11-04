module.exports = {
  success,
  fail,
  repair,
  get,
};

//!! Is creating a new object like this necessary?
function success(item) {
  let newItem = {...item};
  if (item.enhancement < 20) {
    newItem.enhancement = item.enhancement + 1;
  }
  
  
  return newItem;
}

// !!! This is an ugly way to do this
function fail(item) {
  let newItem = {...item};
  if(item.enhancement < 15) {
    newItem.durability = item.durability - 5;
  }
  else {
    newItem.durability = item.durability - 10;
  }
  if(item.enhancement > 16) {
    newItem.enhancement = item.enhancement -1;
  }
  return newItem;
}

function repair(item) {
  let newItem = {...item};
  newItem.durability = 100; 
  return newItem;
}

function get(item) {
  return { ...item };
}
