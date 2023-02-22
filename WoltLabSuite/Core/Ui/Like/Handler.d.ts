/**
 * Provides interface elements to display and review likes.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @deprecated  5.2 use ReactionHandler instead
 */
interface LikeHandlerOptions {
    badgeClassNames: string;
    isSingleItem: boolean;
    markListItemAsActive: boolean;
    renderAsButton: boolean;
    summaryPrepend: boolean;
    summaryUseIcon: boolean;
    canDislike: boolean;
    canLike: boolean;
    canLikeOwnContent: boolean;
    canViewSummary: boolean;
    badgeContainerSelector: string;
    buttonAppendToSelector: string;
    buttonBeforeSelector: string;
    containerSelector: string;
    summarySelector: string;
}
interface LikeUsers {
    [key: string]: number;
}
interface ElementData {
    badge: HTMLUListElement | null;
    dislikeButton: null;
    likeButton: HTMLAnchorElement | null;
    summary: null;
    dislikes: number;
    liked: number;
    likes: number;
    objectId: number;
    users: LikeUsers;
}
declare class UiLikeHandler {
    protected readonly _containers: WeakMap<HTMLElement, ElementData>;
    protected readonly _objectType: string;
    protected readonly _options: LikeHandlerOptions;
    /**
     * Initializes the like handler.
     */
    constructor(objectType: string, opts: Partial<LikeHandlerOptions>);
    /**
     * Initializes all applicable containers.
     */
    initContainers(): void;
    /**
     * Creates the interface elements.
     */
    protected _buildWidget(element: HTMLElement, elementData: ElementData): void;
    /**
     * Creates a reaction button.
     */
    protected _createButton(element: HTMLElement, reactionTypeID: number, insertBefore: HTMLElement | null, appendTo: HTMLElement | null): HTMLAnchorElement;
}
export = UiLikeHandler;
