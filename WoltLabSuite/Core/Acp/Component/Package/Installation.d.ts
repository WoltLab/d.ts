/**
 * Processes the installation, update or uninstallation of packages step by step.
 *
 * @author Alexander Ebert
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
type ActionName = "DevtoolsInstallPackage" | "InstallPackage" | "UninstallPackage";
type Response = {
    currentAction?: string;
    innerTemplate?: string;
    node?: string;
    packageID?: number;
    progress?: number;
    queueID?: number | null;
    redirectLocation?: string;
    step: "install" | "rollback" | "success" | "uninstall";
    template?: string;
};
type InstallationOptions = {
    allowRollback: boolean;
    isUpdate: boolean;
    redirectLocation: "license";
};
declare global {
    interface Window {
        _trackPackageStep?: (actionName: ActionName, data: Response) => void;
    }
}
/**
 * Installs or updates the packages of the queue.
 */
export declare function startInstallation(queueId: number, options?: Partial<InstallationOptions>): Promise<void>;
/**
 * Installs a devtools project as a package.
 */
export declare function startDevtoolsInstallation(queueId: number, projectId: number): Promise<void>;
/**
 * Uninstalls the package.
 */
export declare function startUninstallation(packageId: number): Promise<void>;
/**
 * Handles the buttons on the confirmation page of a package installation.
 */
export declare function setupConfirmation(queueId: number, cancelEndpoint: string, options: Pick<InstallationOptions, "allowRollback" | "isUpdate">): void;
/**
 * Handles the buttons to uninstall a package.
 */
export declare function setupUninstallButtons(): void;
export {};
