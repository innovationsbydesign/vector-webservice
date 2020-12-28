#!/usr/bin/env python3

# Copyright (c) 2018 Anki, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License in the file LICENSE.txt or at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Play animations on Vector

Play an animation using a trigger, and then another animation by name.
"""
import sys,getopt, anki_vector
#import asyncio, threading, time


def main():
    
    #conn.run_coroutine(play_animation()).result()
    #loop = asyncio.get_event_loop()
    
    try:
        opts, args = getopt.getopt(sys.argv[1:], "s:i:c:")
    except getopt.GetoptError as err:
        # print help information and exit:
        print(err) # will print something like "option -a not recognized"
        usage()
        sys.exit(2)
    action = "anim_holiday_hny_fireworks_01"
    serial = None
    config = None
    ip=None
    for o, a in opts:
        if o == "-s":
            serial = a.strip()
        elif o == "-a":
            action = a.strip()
        elif o == '-c':
            config  = {"cert": a.strip()}
        elif o == '-i':
            ip = a.strip()
        else:
            action = "anim_holiday_hny_fireworks_01"
           # assert False, "unhandled option"
    
     
    # Connect to your Vector
    # config = { "cert": "/home/ddevine/.anki_vector/Vector-P9H1-006037af.cert", "name" : "Vector-P9H1", 
    #   "192.168.1.7:443", , "cVFCZLc3R/aDVIP5tk9q8Q==")
    # conn.connect(20)
    
    # Close the connectionanim_pounce_success_02anim_holiday_hny_fireworks_01
   
    #args2 = anki_vector.util.parse_command_args()
    #print(res)
   
    with anki_vector.Robot(serial = serial, config = config, ip=ip) as robot:  
        print("Playing animation by name: " + action)
        robot.anim.play_animation(action)


if __name__ == "__main__":
    main()
