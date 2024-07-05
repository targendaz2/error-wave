import { PathLike } from 'node:fs';

/** Indicates that a script or process cannot be run. */
export class ExecutionError extends Error {
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options);
        this.name = 'ExecutionError';
    }
}

/** Indicates that a file system operation cannot be completed. */
export class FileSystemError extends Error {
    path?: PathLike;

    constructor(
        message?: string,
        options?: ErrorOptions & { path?: PathLike },
    ) {
        super(message, options);
        this.name = 'FileSystemError';
        if (options && options.path) {
            this.path = options.path;
        }
    }
}

/** Indicates that an operation cannot be completed due to permissions. */
export class PermissionsError extends Error {
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options);
        this.name = 'PermissionsError';
    }
}

/** Indicates that a provided argument does not have an allowable value. */
export class ValueError extends Error {
    constructor(message?: string, options?: ErrorOptions) {
        super(message, options);
        this.name = 'ValueError';
    }
}
