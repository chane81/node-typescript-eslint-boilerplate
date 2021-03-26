"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main = async () => {
    const app = express_1.default();
    const port = 3000;
    app.listen(port, () => {
        console.log(`server started on http://localhost:${port}`);
    });
};
main();
//# sourceMappingURL=server.js.map