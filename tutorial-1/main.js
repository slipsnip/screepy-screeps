module.exports.loop = function () {

    const sources = creep.room.find(FIND_SOURCES);
    const spawn = Game.spawns.Spawn1;
    const harvester = [MOVE, CARRY, WORK];
    [...Game.creeps].forEach((creep) => {
    if (creep.carry.energy < creep.carryCapacity) {
        if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0]);
        }
    } else {
        if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(spawn)
        }
    }

    })

}