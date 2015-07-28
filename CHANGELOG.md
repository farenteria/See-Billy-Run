#Change log
All notable changes to this project will be documented in this file

## 1.2 / 2015-07-28
### Added
	- Screen size detection, and act accordingly
### Fixed
	- Several animations for different browsers
### Bugs
	- Firefox needs a final coat
	
## 1.1 / 2015-07-28
### Added
	- Swipe controls for mobile
### Bugs
	- Bugs from previous update apply here

## 1.0 / 2015-07-27
### Added
	- Instructions and start button
	- Explosion animation
	- More styling all around
	- moz-kit for firefox testing
### Fixed
	- Several elements look and play nicely now
### Removed
	- Testing code
### Bugs
	- Moz-kit needs some fixing

## 0.8 / 2015-07-25
### Added
	- Added score and round in dom
	- Moved code around to be easier, and faster
	- Added our version for clouds (still early)
### Fixed
	- more dependency on GPU, making game smoother
### Removed
	- All references to pixi.js library. Not necessary
### Bugs
	- Sliding block isn't smooth, because using GPU for this cause some nasty bugs. Still very playable
	- Clouds don't look as nice as before, this will be fixed in future release
	
## 0.7 / 2015-07-23
### Added
	- Button to start game
	- Scoring system
	- New round every five points
	- Collision detection
### Fixed
	- Sliding animations and collisions
	- every block now has a unique id
###Bugs
	- Currently bugs out with each new block that's added (it adds a ton of them every 25 ms)
	- Can't test scoring system because of this

## 0.6 / 2015-07-22
### Added
	- Old running animations that don't cause problems
	- New buttons for jumping, sliding, and inserting a new block for testing purposes
	- Block.js which will be used for creating several blocks at will
	- Some styling for blocks, not final
### Fixed
	- Running and jumping animations
	- Character now is in fixed position within game board

## 0.5 / 2015-07-22
### Added
	- Changelog.md will now record changes every night before git push and surge push