/**
 * Provides an object oriented API on top of `setInterval`.
 *
 * @author  Tim Duesterhus
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
declare class RepeatingTimer {
    private readonly _callback;
    private _delta;
    private _timer;
    /**
     * Creates a new timer that executes the given `callback` every `delta` milliseconds.
     * It will be created in started mode. Call `stop()` if necessary.
     * The `callback` will be passed the owning instance of `Repeating`.
     */
    constructor(callback: (timer: RepeatingTimer) => void, delta: number);
    /**
     * Stops the timer and restarts it. The next call will occur in `delta` milliseconds.
     */
    restart(): void;
    /**
     * Stops the timer. It will no longer be called until you call `restart`.
     */
    stop(): void;
    /**
     * Changes the `delta` of the timer and `restart`s it.
     */
    setDelta(delta: number): void;
}
export = RepeatingTimer;
