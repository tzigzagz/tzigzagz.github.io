tZigZagZ Read Me
===


# WORKING SPEC FOR TZZ (Ted's ZigZag&reg;)

Note: "ZigZag" is a registered trademark of Project Xanadu.

Theodor Holm Nelson, Founding Designer, Project Xanadu

This is intended as the kernel of a different computer world in an unusual space.  Why others have not discovered this I do not know.

Like Conway's Game of Life, it defines a space in which all data and events take place, based on local connections.

Everything is based on spatial units (called cells or boxes) and their connections.

ZigZag refers to the author's own detailing of a useful multipurpose system based on these spatial connections.

The following is intended to be a step-by-step, implementable specification for successive versions of ZigZag, each one being more useful than its predecessor.

#Overall Objectives

2015-02-02 ~ Ted Nelson

We want a staged series of distributable programs leading to a very general product, a new software platform accomplishing a number of goals.

We will begin with a simple version and go on from there. How far we get remains to be seen.

The goals include:

- a free-form alternative to spreadsheet
- a simple new kind of database
- an alternative system of structure and visualization for all data
- a database system for personal information of various standard kinds (LifeDimensions)
- portable data structures, able to represent many relations and combine them easily
- lightweight scripting and programming for everyday data
- an Application Builder
- new kinds of visualization, with swooping and morphing (sworfing)
- specific portable "apps" based on this structure, such as
	- a flying-piece editor
	- an annotatable visualization of time
	- a Xanadu&reg; document viewer and editor

#Principal Stages

## Specification Level 1

### Level 1 

Will replicate the the 1996 ZigZag from Australia (Azz), but with files.

- two windows
- standard keyboard commands
- only row and column view (same view on its side)
- *No Sworfing*
- file open and close (slices)
- files co-resident but not interconnecting

### Level 1A

Minimal programming by clones of progcells.

