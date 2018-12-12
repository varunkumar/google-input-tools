## Steps to publish

- Update [CHANGELOG.md](./CHANGELOG.md).
- Bump up the version in package.json. Follow semantic versions.
- Commit and push master to Github
- `vsce login varunkumar`
- Generate new Personal Access Token from https://varunkumarn.visualstudio.com/ > Profile > Security
- `vsce publish` to publish the package
