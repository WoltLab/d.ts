/**
 * An image cropper that allows the user to crop an image before uploading it.
 *
 * @author    Olaf Braun
 * @copyright 2001-2024 WoltLab GmbH
 * @license   GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since     6.2
 */
export interface CropperConfiguration {
    aspectRatio: number;
    type: "minMax" | "exact";
    sizes: {
        width: number;
        height: number;
    }[];
}
export declare function cropImage(element: WoltlabCoreFileUploadElement, file: File, configuration: CropperConfiguration): Promise<File>;
