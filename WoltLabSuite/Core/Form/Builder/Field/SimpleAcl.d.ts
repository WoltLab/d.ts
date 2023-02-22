import Field from "./Field";
import { FormBuilderData } from "../Data";
declare class SimpleAcl extends Field {
    protected _getData(): FormBuilderData;
    protected _readField(): void;
}
export = SimpleAcl;
