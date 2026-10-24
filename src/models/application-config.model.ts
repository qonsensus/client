import { v4 } from "uuid";
import { z } from "zod";

interface ServerInstance {
  id: string;
  url: string;
  lastUsed: Date;
  createdAt: Date;
}

export class ApplicationConfig {
  private lastUpdated: Date = new Date();
  private instances: ServerInstance[] = [];

  getInstance(id: string): ServerInstance {
    // validate
    z.uuidv4().parse(id);

    const found = this.instances.find((instance) => instance.id === id);
    if (!found) throw new Error(`Instance '${id}' not found.`);
    return found;
  }

  removeInstance(id: string): ServerInstance {
    const found = this.getInstance(id);
    const index = this.instances.indexOf(found);
    this.instances.splice(index, 1);
    return found;
  }

  addInstance(url: string): ServerInstance {
    // validation
    z.url().parse(url);

    const newInstance: ServerInstance = {
      createdAt: new Date(),
      lastUsed: new Date(),
      url,
      id: v4(),
    };
    this.instances.push(newInstance);

    this.lastUpdated = new Date();
    return newInstance;
  }
}
