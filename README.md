# UI framework for Owntogether

=======

## Demo Site

You can see these components in action at http://docs.dev.owntogether.org.

Or you run build the docs and demos locally.

## Development

For issues, including progress on accessibility support for these UI elements, see the [Issue Tracker](https://github.com/milif/owntogether/issues).

See [CONTRIBUTING.md](https://github.com/milif/owntogether/tree/master/CONTRIBUTING.md) for information
on structure, documentation, and code conventions.

### File Structure

- Components belong in `src/components/{componentName}`
- Component modules must be named `ot.components.{componentName}`
- Templates for directives are declared inline
- Gulp builds files to `dist` folder, which is not version controlled (read below)

### Commit Conventions

- http://github.com/ajoslin/conventional-changelog
- git commit-msg hook available [here](https://github.com/angular/angular.js/blob/master/validate-commit-msg.js). It will validate your commit messages for you.

### Development

- `npm install && gulp` to init & rebuild all project
- `gulp docs` to rebuild docs into dist/docs
- `gulp watch` to rebuild on changes
