import TestServiceContainer from "./test/app/TestServiceContainer";

TestServiceContainer.init();
TestServiceContainer.start().catch(reason => {
    console.error(reason)
});
