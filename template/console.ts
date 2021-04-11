import {CommandService} from "nergal";
import AppServiceContainer from "./src/AppServiceContainer";
import AppCommandsLoader from "./src/ConsoleCommands/AppCommandsLoader";

AppServiceContainer.init();
AppServiceContainer.start().then(() => {
    let commandService = new CommandService(new AppCommandsLoader());
    commandService.run();
});