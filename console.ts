import {CommandService} from "./src/Services/Command/CommandService";
import AbstractServiceContainer from "./src/AbstractServiceContainer";
import TestCommandsLoader from "./test/app/Commands/TestCommandsLoader";

AbstractServiceContainer.init();
AbstractServiceContainer.start().then(() => {
    let commandService = new CommandService(new TestCommandsLoader());
    commandService.run();
});