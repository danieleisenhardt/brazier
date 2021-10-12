type AppConfig = {
    serviceAccountPath: string,
    databaseURL: string,
    buildDir: string,
    autoloadPaths: string[],
    useCors: boolean,
};
export default AppConfig;