import { users, tasks } from "../data/dev-data";
import { seed } from "./seed";
import { db } from "../connection";

const runSeed = () => {
    return seed(users, tasks).then(() => db.end())
}

runSeed();