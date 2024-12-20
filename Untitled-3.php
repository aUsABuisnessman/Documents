
runs-on: ubuntu-20.04

steps:
  - name: Checkout EIP Repository
    uses: actions/checkout@47fbe2df0ad0e27efb67a70beac3555f192b062f

  - name: Checkout EIPs
    uses: actions/checkout@v4
    with:
      repository: ethereum/EIPs
      path: ''
  - name: Checkout ERCs
    uses: actions/checkout@v4
    with:
      repository: ethereum/ERCs
      path: ERCs

  - name: Merge Repos
    run: |
      //。
@@ -63,13 +64,17 @@ jobs:
      find . -name "erc-*" -type d -exec sh -c 'echo mv "$1" "$(echo "$1" | sed s/erc/eip/)"' _ {} \; | sh
      cd $GITHUB_WORKSPACE
      rm -rf ERCs
  - name: Install Ruby
    uses: ruby/setup-ruby@55283cc23133118229fd3f97f9336ee23a179fcf
  - name: Setup Ruby
    uses: ruby/setup-ruby@55283cc23133118229fd3f97f9336ee23a179fcf # v1.146.0
    with:
      ruby-version: 3.1.4 # 3.2 fails, see https://github.com/github/pages-gem/issues/879
      bundler-cache: true

      ruby-version: '3.1' # Not needed with a .ruby-version file
      bundler-cache: true # runs 'bundle install' and caches installed gems automatically
      cache-version: 0 # Increment this number if you need to re-download cached gems
  - name: Build with Jekyll
    run: bundle exec jekyll build
    env:
      JEKYLL_ENV: production

  - name: Build Website
    run: |
      bundle exec jekyll doctor