---
slug: /file-systems
title: file systems
sidebar_label: File Systems
sidebar_position: 1
---

# File Systems

[Anatomy of Filesystems](https://www.youtube.com/watch?v=0Yf-W7Ps6u4)

Communication standards to talk to your harddisk
- (P)ATA
- SATA
- SCSI - Small Computer System Interface

LBA - Logical Block Addressing

#### Block Groups
- Super Block
- Group Descriptor Blocks
- Inode Blocks
- Data Blocks

The Super Block contains information about free blocks, free Inodes, the size, etc.
The Group Descriptor contains the block number of the first Inode and the number of free blocks in this group.

Every file or Directory will have a corresponding Inode, which contains information about the file/directory
Every Inode is 128bytes
One Inode can have up to 32 Inodes


Boot Block

[Disk sector](https://en.wikipedia.org/wiki/Disk_sector#Cluster)

[Linux Filesystems: Where did they come from?](https://www.youtube.com/watch?v=SMcVdZk7wV8)